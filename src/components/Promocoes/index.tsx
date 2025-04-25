import { BtnComprar, Card, Preco, ProdutosItens } from '../../styles'

import geleia from '../../assets/images/geleia_de_goiaba.svg'
import { Sessao_Promocoes } from './styles'

const Produtos = () => (
  <Sessao_Promocoes>
    <h2>Promoções</h2>
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
            <span>R$ 15,80</span>
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
            <span>R$ 15,80</span>
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
            <span>R$ 15,80</span>
            <Preco>R$ 10,80</Preco>
            <BtnComprar>Comprar</BtnComprar>
          </div>
        </Card>
      </li>
    </ProdutosItens>
  </Sessao_Promocoes>
)

export default Produtos
