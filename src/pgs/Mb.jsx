
export function Mb(){
    const med = 
    [
        
        {prod:'Fralda', desc:'Pampers Confort Sec', val:86.49, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Ff%2Fr%2Ffralda_pampers_confort_sec_tamanho_xg_62_tiras_7500435106719_2_.jpg%3Fwidth%3D450%26height%3D450%26quality%3D85%26type%3Dresize&w=384&q=75'},
        {prod:'Shampoo', desc:'Johnsons Baby Regular', val:19.75, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Fs%2Fh%2Fshampoo-johnson_s-baby-regular-400ml-7891010800048_hero.jpg%3Fwidth%3D170%26height%3D170%26quality%3D85%26type%3Dresize&w=256&q=75'},
        {prod:'Shampoo', desc:'Huggies Infantil', val:16.39, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Fs%2Fh%2Fshampoo-infantil-huggies-extra-suave-com-200ml-7.jpg%3Fwidth%3D170%26height%3D170%26quality%3D85%26type%3Dresize&w=256&q=75'},
        {prod:'Shampoo', desc:'Baby Dove hidratação', val:12.96, img:'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fimg.drogaraia.com.br%2Fcatalog%2Fproduct%2Fs%2Fh%2Fshampoo-baby-dove-hidratacao-enriquecida-cabelos-claros-com-200ml-2.jpg%3Fwidth%3D170%26height%3D170%26quality%3D85%26type%3Dresize&w=256&q=75'},
        {prod:'Novalgina', desc:'Novalgina 1 G c/10', val:17.99, img:'https://drogariamaisbaratotanque.com.br/wp-content/uploads/2022/07/novalgina1-removebg-preview.png'},
        {prod:'Coristina D', desc:'Coristina® D medicamentosa.', val:36.47, img:'https://guiadafarmacia.com.br/consulta-medicamentos/wp-content/uploads/2021/07/7891142136626.png'},
    ]
  
return(
    <div className="mb">
        <h3>Mamãe e Bebê</h3>
        <div className="prod  margin">
        {
            med.map(i=>
                    <div className="box">
                        <h3>{i.prod} </h3>
                        <img src={i.img} alt="" />
                        <p>{i.desc}</p>
                        <span>R$ {i.val}</span>
                    </div>

                )
        }
        </div>
    </div>
)
}