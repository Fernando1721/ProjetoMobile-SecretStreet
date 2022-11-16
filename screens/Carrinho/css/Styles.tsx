import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 2,
    padding: 10,
    paddingTop: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  titulo: {
    fontSize: 20,
    color: "white",
    fontweight: "bold",
  },

  btncarrinho: {
    padding:20,
    backgroundColor: "red",
    margin: 20,
    borderRadius: 15,
    marginLeft: "auto",
    marginRight: "auto"
  },

  txtcarrinho: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  txtproduto: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },

  preco:{
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "red"
  },
  quantidade: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "red"
  },
  btnremovercarrinho: {

  },
  fecharpedido: {
    backgroundColor: "red",
  },
  txtfecharpedido: {

  },
});
