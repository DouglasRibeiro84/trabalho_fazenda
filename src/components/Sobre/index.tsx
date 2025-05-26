import { ContainerSobre } from './styles'
import imgSobre from '../../assets/images/img_sobre.jpg'

const Sobre = () => (
  <ContainerSobre>
    <img src={imgSobre} alt="" />
    <div>
      <h2>Sobre</h2>
      <p>
        Sobre o Armazém da Dona Lourdes O Armazém da Dona Lourdes nasceu em
        Loanda/PR, há mais de 20 anos, quando Dona Lourdes começou a vender
        produtos da roça na varanda de casa. Com muito carinho e dedicação, o
        pequeno negócio cresceu e se tornou referência na cidade, oferecendo
        produtos artesanais, alimentos frescos e itens que lembram a vida no
        campo. <br />
        Agora, com este site, queremos levar até você a mesma qualidade e
        acolhimento do nosso armazém. Seja bem-vindo(a) ao nosso cantinho
        virtual!
      </p>
    </div>
  </ContainerSobre>
)

export default Sobre
