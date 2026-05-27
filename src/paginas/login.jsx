import { useState } from "react"

export default function Login({navegar}){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const entrar = async () => {
        const resultado = await fetch('http://localhost:3000/entrar', {
            method: 'POST',
            headers: {'constent-type': 'application/json'},
            body: JSON.stringify({email, senha})
        })
        const data = await resultado.json()
        console.log(data);
        console.log(resultado.ok);
        if (!resultado.ok) {
            alert(data.error)
        } else {
            navegar('usuarios')
        }
    }
    
    return(
        <div>
            <input type="text" id="email"
            placeholder="digite seu email"
            value={email}
            onchange={e => setEmail(e.target.value)}
             />
            <input type="password" id="senha"
            placeholder="digite sua senha"
            value={senha}
            onchange={e => setSenha(e.target.value)}
             />
            <button onClick={entrar}>Entrar</button>
        </div>
    )
}