import React from "react";
import { Stack, Divider, Container, Box } from "@mui/material";
const Policy = ({route}) => {
    const middleDot = '\u00B7';
    return <Box className = "p-tb-80">
    <Container  maxWidth="md" sx={{textAlign:'center'}}>
        <Box className="h3 t-p"> Terms and Conditions</Box>
        <Box className="f-body t-p mt-40" sx={{textAlign:'left'}}>Effective Date: [Inser Date]</Box>
        <Box className="fs-s2 t-p p-tb-20">This Privacy Policy describes how [Crypto Company Name] ("we," "our," or "us") collects, uses, shares, and protects your personal information when you visit our website at [Website URL] (the "Website") and use our services.</Box>
        <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
            <Box className="fs-s t-p">1. Information We Collect</Box>
            <Box className="fs-s2 t-p p-10" sx={{textAlign:'left'}}>We may collect various types of information from and about users of our Website and services, including:</Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} Personal Information: This may include your name, email address, contact information, and other identifying details that you voluntarily provide to us. </Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} Usage Information: We collect information about how you use our Website, including your IP address, browser type, operating system, and the pages you visit.</Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot}  Cookies: We may use cookies and similar tracking technologies to enhance your experience on our Website. You can manage cookie preferences through your browser settings.</Box>
        </Stack>
        <Divider className="divider"/>
        <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
            <Box className="fs-s t-p">2. How We Use Your Information</Box>
            <Box className="fs-s2 t-p p-10" sx={{textAlign:'left'}}>We use your information for the following purposes:</Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} To provide and maintain our services. </Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} To communicate with you, including responding to your inquiries and providing updates about our services. </Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} To improve and optimize our Website and services. </Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} To detect, prevent, and address technical issues, fraud, or security concerns.</Box>
        </Stack>
        <Divider className="divider"/>
        <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
            <Box className="fs-s t-p">3. Information Sharing</Box>
            <Box className="fs-s2 t-p p-10" sx={{textAlign:'left'}}>We may share your information in the following circumstances:</Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} With third-party service providers who assist us in providing and maintaining our services.  </Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} With legal authorities if required to comply with applicable laws, regulations, or legal processes. </Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} In connection with a merger, sale, or asset transfer, we may share your information with the acquiring party.</Box>
        </Stack>
        <Divider className="divider"/>
        <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
            <Box className="fs-s t-p">4. Your Choices and Rights</Box>
            <Box className="fs-s2 t-p p-10" sx={{textAlign:'left'}}>You have certain rights regarding your personal information:</Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} You may request access to, correction of, or deletion of your personal information. </Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} You can opt-out of receiving promotional emails from us by following the unsubscribe instructions in those emails.</Box>
        </Stack>
        <Divider className="divider"/>
        <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
            <Box className="fs-s t-p">5. Security</Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>We employ industry-standard security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.</Box>
        </Stack>
        <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
            <Box className="fs-s t-p">6. Children's Privacy</Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.</Box>
        </Stack>
        <Divider className="divider"/>
        <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
            <Box className="fs-s t-p">7. Updates to this Privacy Policy</Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated Privacy Policy on our Website.</Box>
        </Stack>
        <Divider className="divider"/>
        <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
            <Box className="fs-s t-p">8. Contact Us</Box>
            <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>If you have any questions or concerns about our Privacy Policy or how we handle your personal information, please contact us at [Contact Email Address].</Box>
        </Stack>
    </Container>       
</Box>
}

export default Policy