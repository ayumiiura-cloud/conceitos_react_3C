import { useState } from "react"

export default function Cadastro({navegar}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [nome, setNome] = useState('')

    const entrar = async () => {
        const resultado = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            headers: {'constent-type': 'application/json'},
            body: JSON.stringify({email, senha, nome})
        })
        const data = await resultado.json()
        console.log(data);
        console.log(resultado.ok);
        if (!resultado.ok) {
            alert(data.error)
        } else {
            alert('cadastro completo.')
            navegar('Login')
        }
    }
    
    return(
        <div>
            <input type="text" id="email"
            placeholder="digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
             <input type="text" id="nome"
            placeholder="digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
             />
            <input type="password" id="senha"
            placeholder="digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
             />
            <button onClick={entrar}>Entrar</button>
        </div>
    )
}