import React from 'react'
import styles from './submenuSolucoes.module.css'

const SubmenuSolucoes = () => {
  return (
    <main>
      <section>

        <div> 
          <h3>Sensores</h3>
          <h2>Monitoramento Online</h2>
        </div>
        <div className={styles.bar}>-</div>


        <div>

          <div className={styles.sensor}>
          <div>
            <img/>
          </div>
          <div>
            <h4>Sensor de Vibração</h4>
            <p>Analise de vibração e temperatura em tempo real</p>
          </div>
          </div>

          <div className={styles.sensor}>
          <div>
            <img/>
          </div>
          <div>
            <h4>Sensor de Energia</h4>
            <p>Detecte Falhas elétricas</p>
          </div>
          </div>

          <div className={styles.sensor}>
          <div>
            <img/>
          </div>
          <div>
            <h4>Smart trac Pro</h4>
            <p>Revolucione a análise</p>
          </div>
          </div>

        </div>

      </section>

      <section>
        <div> 
          <h3>TracOs</h3>
          <h2>Gestão de Ativos</h2>
        </div>

        <div>
          <div>
            <img/>
          </div>
          <div>
            <h2>Software de gestão</h2>
            <p>Analise de vibração e temperatura em tempo real</p>
          </div>

          <div>
            <img/>
          </div>
          <div>
            <h2>Funcionalidade de CMS</h2>
            <p>Detecte Falhas elétricas</p>
          </div>

          <div>
            <img/>
          </div>
          <div>
            <h2>Tractian app</h2>
            <p>Revolucione a análise</p>
          </div>
          
        </div>

      </section>

      <section>
        <div> 
          <h2>Visão Geral</h2>
        </div>

        <div>
          <div>
            <img/>
          </div>
          <div>
            <h2>Cases de Sucesso</h2>
            <p>Analise de vibração e temperatura em tempo real</p>
          </div>

          <div>
            <img/>
          </div>
          <div>
            <h2>Preços</h2>
            <p>Detecte Falhas elétricas</p>
          </div>

          <div>
            <img/>
          </div>
          <div>
            <h2>Retorno sobre Investimento</h2>
            <p>Revolucione a análise</p>
          </div>
          
        </div>

      </section>

    </main>


  )
}

export default SubmenuSolucoes