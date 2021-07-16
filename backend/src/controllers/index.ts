import fileSystem from 'fs'
import { Parser } from "simple-text-parser";
import { readFileSync } from 'fs'
import readLine from 'readline'

interface datas {
  tipo: string,
  data: string,
  valor: number,
  cpf: string,
  cartao: string,
  hora: string,
  donoDaLoja: string,
  nomeDaLoja:string
}

class UploadoController {
    async loadCategory (file: Express.Multer.File): Promise<datas> {
        return new Promise((resolve, reject) => {
          const readeble = fileSystem.createReadStream(file.path)
          const rl = readLine.createInterface({
            input: readeble
          })

          let datas = [{
            tipo: '',
            data: '',
            valor: 0,
            cpf: '',
            cartao: '',
            hora: '',
            donoDaLoja: '',
            nomeDaLoja:''
          }]

          rl.on('line',(line) => {
            const tipo = line.slice(0,1)
            const data = line.slice(1,9)
            const valor = Number(line.slice(9,19)) / 100
            const cpf = line.slice(19,30)
            const cartao = line.slice(30,41)
            const hora = line.slice(41,47)
            const donoDaLoja = line.slice(47,61)
            const nomeDaLoja = line.slice(61,80)
            datas.push({
              tipo,
              data,
              valor,
              cpf,
              cartao,
              hora,
              donoDaLoja,
              nomeDaLoja
            })
            return datas
          })
        })
      }

      
}

export {UploadoController}