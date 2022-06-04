const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  #Tipo dos dados
  type Cripto {
    id: ID
		nome: String
		simbolo: String
		preco_de_compra: Float
		valor_comprado: Float
		quantidade: Float
		created_at: String
		updated_at: String
  }

  #Tipo das Queries
  type Query {
    getCriptos(id: Int): Cripto
    getAllCriptos: [Cripto]
  }
`;

const criptos = [
  {
    id: 1,
		nome: "Bitcoin",
		simbolo: "btc",
		preco_de_compra: 10000,
		valor_comprado: 100000,
		quantidade: 10,
		created_at: "2022-06-01T14:27:59.000-03:00",
		updated_at: "2022-06-01T14:27:59.000-03:00",
  },
  {
    id: 1520,
		nome: "Ethereum",
		simbolo: "eth",
		preco_de_compra: 5000,
		valor_comprado: 500,
		quantidade: 10,
		created_at: "2022-06-01T14:27:59.000-03:00",
		updated_at: "2022-06-01T14:27:59.000-03:00",
  },
];

const resolvers = {
  Query: {
    getCriptos: (_, params) => criptos.find((item) => item.id == params.id),
    getAllCriptos: () => criptos
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(5000, (() => console.log("Estou funcionando na porta 5000")))