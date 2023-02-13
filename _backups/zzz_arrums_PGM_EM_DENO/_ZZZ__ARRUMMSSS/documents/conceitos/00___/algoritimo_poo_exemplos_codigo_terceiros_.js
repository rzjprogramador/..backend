{
  em_poo_classe_de_criacao_entidade_statica: `
  link: 'https://github.com/rocketseat-content/youtube-node-testes',

  class User {
    id?: string;
    name: string;
    username: string;
    email: string;
  
    private constructor({ name, username, email }: User) {
      return Object.assign(this, {
        name,
        username,
        email,
      });
    }
  
    static create({ name, username, email }: User) {
      const user = new User({ username, name, email });
      return user;
    }
  }
  
  export { User };
  `,


}