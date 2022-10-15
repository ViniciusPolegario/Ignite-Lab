import { Checkbox } from "@radix-ui/react-checkbox";
import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import Logo from "../Logo";

export function SignIn() {
  const [isUserSignIn, setIsUserSignIn] = useState(false);

  async function handleSignin(event: FormEvent) {
    event.preventDefault();
    await axios.post("/sessions", {
      email: "teste@hotmail.com.br",
      password: "123456789",
    });
    setIsUserSignIn(true);
  }
  return (
    <div className="w-screen h-screen gap-4 bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar
        </Text>
      </header>

      <form
        onSubmit={handleSignin}
        className="flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-2"
      >
        {isUserSignIn && <Text>Login Realizado</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              placeholder="Digite seu e-mail"
            ></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              placeholder="********"
            ></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChield size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha
          </a>
        </Text>
        <Text asChield size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possuia conta? Crie uma agora
          </a>
        </Text>
      </footer>
    </div>
  );
}
