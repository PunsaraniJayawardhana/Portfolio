import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Text,
    Section,
} from "@react-email/components";

import { Tailwind } from '@react-email/components';

type Props = {
    message:string;
    name:string;
    number:string;
}

export default function Email({message, name, number}: Props) {
  return (
   <Html>
    <Head/>
    <Preview>New Message From Your Portfolio</Preview>
    <Tailwind>
        <Body className='bg-gray-50'>
            <Container>
                <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                    <Heading className="leading-tight">You Received a New Message From Your Portfolio</Heading>
                    <Hr />
                    <Text>Message :{message}</Text>
                    <Hr />
                    <Text>The sender name is :{name}</Text>
                    <Text>Contact sender :{number}</Text>
                </Section>
            </Container>
        </Body>
    </Tailwind>
   </Html>
  )
}