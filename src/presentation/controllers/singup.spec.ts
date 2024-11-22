describe("SignUp Controller", () => {
  //nome do teste
  test("Shoud return 400 if no name is provide", () => {
    //retorna um erro 400 em caso de o nome não for enviado
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        name: "any_name",
        email: "any_email@mail.com",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    sut.handle(httpRequest);
  });
});
