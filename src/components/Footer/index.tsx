import { Contatos, Copyright, Rodape } from './styles'

const Footer = () => (
  <>
    <Rodape>
      <Contatos>
        <h4>Fale conosco</h4>
        <p>
          <i className="bi bi-telephone-forward"></i>(41) 99664455
        </p>
        <p>
          <i className="bi bi-whatsapp"></i>(41) 99664455
        </p>
        <p>
          <i className="bi bi-envelope-at"></i>contato@teste.com
        </p>
        <div>
          <p>Atendimento de Segunda a Sexta das 08h às 17h</p>
        </div>
      </Contatos>
      <div>
        <h4>Redes Socias</h4>
        <p>
          <i className="bi bi-facebook"></i>Facebook
        </p>
        <p>
          <i className="bi bi-instagram"></i>Instagram
        </p>
      </div>
      <div>
        <h4>Endereço</h4>
        <p>Rua teste 123 - Curitba - Pr</p>
      </div>
    </Rodape>
    <Copyright>
      <p>© Do sítio para você - Todos os direitos reservados 2025</p>
    </Copyright>
  </>
)

export default Footer
