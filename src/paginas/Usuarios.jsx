import { useEffect, useState } from "react"

export default function Usuarios({navegar}) {
    const [cont, setCont] = useState(0)
    const [usuarios, setUsuarios] = useState([])
    const [modal, setModal] = useState(false)
    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [id, setId] = useState(0)

    const aumenta = () => {
        setCont(cont + 1)
    }
    useEffect(() => {
        buscarUsuarios();
    }, [cont])

    const buscarUsuarios = async () => {
            const resultado = await fetch('http://localhost:3000/usuarios')
            const data = await resultado.json()
            console.log(data);
            setUsuarios(data)
        }

    const editar = (usuario) => {
        console.log('editando ', usuario);
        setModal(true)
        setEmail(usuario.email)
        setNome(usuario.nome)
        setSenha(usuario.senha)
        setId(usuario.id)
    }

    const confirmarEdicao = async () => {
        const resultado = await fetch(`http://localhost:3000/usuarios/${id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    nome,
                    senha
                })
            })
            const data = await resultado.json()
            console.log(data);
            buscarUsuarios()
    }
    
    return(
        <div>
            <h1>Usuários</h1>
            {cont}
            <button onClick={aumenta}>Aumentar</button>

            <br />
            <br />

            <ul>

              {usuarios.map((usuario) => (
                <li key={usuario.id}>
                {usuario.email}, 
                <br />
                STATUS: {usuario.ativo ? 'ativo' : 'Desativo'}

                <button onClick={() => editar(usuario)}>Editar</button>
                </li>
              ))}
              
              
            </ul>
                 

            {modal && (
                <div className="fundo-modal">
                <div className="modal-content">
                <h1>Editar</h1>
                <input type="text" id="email"
                value={email}
                placeholder="digite o Email"
                onChange={(e) => setEmail(e.target.value)}
                 />
                 <input type="text" id="nome"
                 value={nome}
                 placeholder="digite o nome"
                 onChange={(e) => setNome(e.target.value)}
                />
                 <input type="text" id="senha"
                 value={senha}
                 placeholder="digite a senha"
                 onChange={(e) => setSenha(e.target.value)}/>

                 <button onClick={() => setModal(false)}>fechar</button>

                 <button onClick={() => confirmarEdicao()}>Confirmar</button>


                </div>
                </div>
            )}

    </div>
)
}