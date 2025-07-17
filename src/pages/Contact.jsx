import EmailIcon from "../components/Contact/EmailIcon";
import PhoneIcon from "../components/Contact/PhoneIcon";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl mx-auto gap-4">
      <h1 className="flex text-2xl font-bold mb-20">Fale Conosco</h1>
      <p className="text-lg">Para entrar em contato conosco, você pode nos enviar um e-mail ou nos ligar.</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <EmailIcon />
          <p className="text-lg">E-mail: <a href="mailto:contato@accp.com.br">contato@accp.com.br</a></p>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <p className="text-lg">Telefone: <a href="tel:+5581999999999">(81) 99999-9999</a></p>
        </div>
      </div>
    </div>
  )
}