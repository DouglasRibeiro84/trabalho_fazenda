import { Sessao_Produtos } from './styles'

import geleia from '../../assets/images/geleia_de_goiaba.svg'
import { BtnComprar, Card, Preco, ProdutosItens } from '../../styles'

const Produtos = () => (
  <Sessao_Produtos>
    <h2>Produtos</h2>
    <ProdutosItens>
      <li>
        <Card>
          <img src={geleia} alt="" />
          <div>
            <h3>Geleia de goiaba</h3>
            <p>
              A Geleia de Goiaba é 100% natural, sem conservantes, e perfeita
              para pães, torradas, bolos e sobremesas. Com 300g de puro sabor da
              fruta, é uma opção deliciosa e saudável para o seu dia a dia.
            </p>
            <Preco>R$ 10,80</Preco>
            <BtnComprar>Comprar</BtnComprar>
          </div>
        </Card>
      </li>
      <li>
        <Card>
          <img src={geleia} alt="" />
          <div>
            <h3>Geleia de goiaba</h3>
            <p>
              A Geleia de Goiaba é 100% natural, sem conservantes, e perfeita
              para pães, torradas, bolos e sobremesas. Com 300g de puro sabor da
              fruta, é uma opção deliciosa e saudável para o seu dia a dia.
            </p>
            <Preco>R$ 10,80</Preco>
            <BtnComprar>Comprar</BtnComprar>
          </div>
        </Card>
      </li>
      <li>
        <Card>
          <img src={geleia} alt="" />
          <div>
            <h3>Geleia de goiaba</h3>
            <p>
              A Geleia de Goiaba é 100% natural, sem conservantes, e perfeita
              para pães, torradas, bolos e sobremesas. Com 300g de puro sabor da
              fruta, é uma opção deliciosa e saudável para o seu dia a dia.
            </p>
            <Preco>R$ 10,80</Preco>
            <BtnComprar>Comprar</BtnComprar>
          </div>
        </Card>
      </li>
    </ProdutosItens>
  </Sessao_Produtos>
)

export default Produtos
