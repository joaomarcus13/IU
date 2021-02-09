const puppeteer = require('puppeteer')


async function getTurmas(username,password) {
    const url = 'https://sigaa.ufpi.br/sigaa/verTelaLogin.do'
    

        const browser = await puppeteer.launch({
            headless: true, args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
            ]
        })
        const page = await browser.newPage()
        await page.goto(url, { waitUntil: "load" })
        await page.type('input[type=text]', username)
        await page.type('input[type=password]', password)
        await page.click('input[type=submit]')
        await page.waitForSelector('.descricao')
        const dcp = await page.evaluate(() => {
            let turmas = [], local = [], horario = []
            document.querySelectorAll('.descricao form a').forEach(e => {
                turmas.push(e.childNodes[0].data)
            })
           
            let info = document.querySelectorAll('.info')
            for(let i=0;i<(turmas.length*2);i+=2){
                local.push(info[i].innerText)
                horario.push(info[i+1].innerText)
            }

            let ob = []
            for(let i=0;i<turmas.length;i++){
                let obj = {}
                obj['turma'] = turmas[i]
                obj['horario'] = horario[i]
                obj['local'] = local[i]
                ob.push(obj)
            }
            return ob
        })
        await browser.close()
        return dcp


}


const username = 'barbosamarcos'
const password = 'silvabarbosajoao'


getTurmas(username,password)
    .then(e => console.log(e))
    .catch(e => console.log(e))




