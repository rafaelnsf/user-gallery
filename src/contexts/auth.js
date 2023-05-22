import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        //Carregamento inicial
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter((user) => user.email === JSON.parse(userToken).email);
            if (hasUser) setUser(hasUser[0]);
        }

        //Mock inicial de um usuario teste
        let newUser = [{ email: "admin@admin.com", password: "admin" }];
        localStorage.setItem("users_db", JSON.stringify(newUser));
    }, [])

    //Função de login
    const signin = (email, password) => {
        //Carregamento dos usuarios contidos no banco
        const usersStorage = JSON.parse(localStorage.getItem("users_db"))

        //Verifica se existe algum usuario igual ao que foi passado como parametro
        const hasUser = usersStorage?.filter((user) => user.email === email);

        if (hasUser?.length) {
            //Confere email e senha
            if (hasUser[0].email === email && hasUser[0].password === password) {
                //Gera um token aleatorio e salva no banco e no state user também
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser({ email, password });
                return;
            } else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuário não cadastrado";
        }
    }
    //Remove usuario logado deixando variavel vazia
    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    };

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

