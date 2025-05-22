import {
  ContainerFooter,
  Contatos,
  RedesEndereco,
  Copyright,
  Rodape
} from './styles'

const Footer = () => (
  <>
    <Rodape>
      <ContainerFooter>
        <Contatos>
          <div className="topo">
            <h4>Fale conosco</h4>
            <div>Atendimento de Segunda a Sexta das 08h às 17h</div>
          </div>
          <div className="numeros">
            <p>
              <i className="bi bi-telephone-forward"></i>(41) 96110378
            </p>
            <p>
              <i className="bi bi-whatsapp"></i>(41) 96110378
            </p>
            <p>
              <i className="bi bi-envelope-at"></i>contato@teste.com
            </p>
          </div>
        </Contatos>
        <RedesEndereco>
          <div>
            <h4>Redes Sociais</h4>
            <p>
              <i className="bi bi-facebook"></i>Facebook
            </p>
            <p>
              <i className="bi bi-instagram"></i>Instagram
            </p>
          </div>
          <div>
            <h4>Endereço</h4>
            <p>Loanda Paraná, 87900-000</p>
          </div>
        </RedesEndereco>
      </ContainerFooter>
    </Rodape>

    <Copyright>
      <p>© Do sítio para você - Todos os direitos reservados 2025</p>
    </Copyright>
  </>
)

export default Footer
