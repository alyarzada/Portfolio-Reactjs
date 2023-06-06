import TextArea from "antd/es/input/TextArea";
import { Button, Input } from "antd";

const Form = () => {
  return (
    <form className="w-full lg:w-60%">
      <Input
        id="fullname"
        size="large"
        placeholder="Full Name"
        className="bg-transparent text-slate-50 placeholder:(text-gray-400 italic text-sm) mb-6"
      />
      <Input
        id="email"
        size="large"
        placeholder="E-mail Address"
        className="bg-transparent text-slate-50 placeholder:(text-gray-400 italic text-sm) mb-6"
      />
      <TextArea
        id="message"
        rows={4}
        placeholder="Message"
        maxLength={6}
        className="bg-transparent text-slate-50 placeholder:(text-gray-400 italic text-sm) mb-6"
      />
      <Button type="primary" className="w-full lg:col-span-2">
        Send
      </Button>
    </form>
  );
};

export default Form;
