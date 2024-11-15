import styled from "styled-components";
import DesignerSelect from "./DesignerSelect.jsx";
import {useState} from "react";
import PricingSelect from "./PricingSelect.jsx";
import Input from "./Input.jsx";
import TextArea from "./TextArea.jsx";
import toast from "react-hot-toast";
import {useTranslation} from "react-i18next";

const Container = styled.div`
  margin-top: 100px;
  width: 100%;

  @media (max-width: 1100px) {
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    padding-left: 10px;
    margin-top: -100px;
  }
`

const P = styled.p`
  font-family: "Fixel Medium", serif;
  font-size: clamp(1.5rem, 1.226rem + 1.2179vw, 2.6875rem);
  color: #1344F0;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding-left: 10px;
    margin-top: 20px;
  }
`


const Btn = styled.button`
  position: relative;
  margin-top: 20px;
  background: #1344F0;
  border: none;

  padding: 25px 60px;

  cursor: pointer;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: hidden;
  transition: color 0.3s ease;
  width: 80%;

  & > span {
    font-size: clamp(2.125rem, 1.7788rem + 1.5385vw, 3.625rem);
    color: #F2F6FF;
    font-family: "Fixel Bold", serif;
  }


  @media (max-width: 1200px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  &:hover {
    color: #F2F6FF;
  }

  &:hover::before {
    opacity: 1;
  }

  &:disabled {
    background: linear-gradient(112deg, rgba(19, 68, 240, 1) 0%, rgba(86, 255, 71, 1) 100%);
    cursor: not-allowed;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(112deg, rgba(19, 68, 240, 1) 0%, rgba(86, 255, 71, 1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }
`;


const Form = () => {
    const {t}=useTranslation()

    const [designerOption, setDesignerOption] = useState("ui-ux");
    const [pricingOption, setPricingOption] = useState("advanced");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name === "") {
            toast.error(t("main.contact.form-toast.name"));
            return;
        }

        if (email === "") {
            toast.error(t("main.contact.form-toast.email"));
            return;
        }

        if (!emailPattern.test(email)) {
            toast.error(t("main.contact.form-toast.valid-email"));
            return;
        }

        const data = {
            name,
            email,
            comment
        };

        const url = import.meta.env.VITE_CONTACT_URL
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success(t("main.contact.form-toast.success"));
                setIsSent(true);
            } else {
                console.error('Failed to send data to the server');
            }

        } catch (error) {
            console.error('Error submitting data:', error);
        } finally {
            console.log(data);
            setName("");
            setEmail("");
            setComment("");
            setDesignerOption("ui-ux");
            setPricingOption("basic");
        }
    };

    return (
        <Container>
            <P>{t("main.contact.form.1")}</P>
            <DesignerSelect option={designerOption} setOption={setDesignerOption}/>
            <P>{t("main.contact.form.2")}</P>
            <PricingSelect setOption={setPricingOption} option={pricingOption}/>
            <P>{t("main.contact.form.3")}</P>
            <Input onChange={(e) => setName(e.target.value)} value={name} type={"text"} placeholder={"Name"}/>
            <P>{t("main.contact.form.4")}</P>
            <Input onChange={(e) => setEmail(e.target.value)} value={email} type={"email"}
                   placeholder={"mail@example.com"}/>
            <P>{t("main.contact.form.5")}</P>
            <TextArea value={comment} onChange={(e) => setComment(e.target.value)} placeholder={"Your Message"}/>
            <Btn type={"submit"}
                onClick={(e) => handleSubmit(e)}
                disabled={isSent}>
                <span>
                    {isSent ? t("main.contact.form.active-button") : t("main.contact.form.button")}
                    <img src="/digital/ui/arrow-up-right.svg" alt="arrow-icon"/>
                </span>
            </Btn>
        </Container>
    );
};

export default Form;