import React from "react";
// import { Stack, Divider, Container, Box } from "@mui/material";
import { Box } from "@mui/material";

const Terms = ({route}) => {
    // const middleDot = '\u00B7';
    // return <Box className = "p-tb-80">
    //     <Container maxWidth="md" sx={{textAlign:'center'}}>
    //         <Box className="h3 t-p"> Terms and Conditions</Box>
    //         <Box className="fs-2 t-p p-20"  >Welcome to [Crypto Company Name]! These Terms and Conditions ("Terms") outline the rules and regulations for using our website at [Website URL] ("Website"). By accessing this Website, we assume you accept these Terms in full. Do not continue to use [Crypto Company Name]'s Website if you do not accept all of the Terms stated on this page.</Box>
    //         <Box className="f-body t-p p-10" >The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and any or all Agreements: "Client," "You," and "Your" refers to you, the person accessing this Website and accepting the Company's Terms and Conditions. "The Company," "Ourselves," "We," "Our," and "Us," refers to our Company. "Party," "Parties," or "Us," refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration or any other means, for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services/products, in accordance with and subject to, prevailing English Law. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to the same.</Box>
    //         <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
    //             <Box className="fs-s t-p mt-20">Cookies</Box>
    //             <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} We employ the use of cookies. By using [Crypto Company Name]'s Website, you consent to the use of cookies in accordance with [Crypto Company Name]'s privacy policy. Most modern-day interactive websites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate/advertising partners may also use cookies.</Box>
    //         </Stack>
    //         <Divider className="divider"/>
    //         <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
    //             <Box className="fs-s t-p">License</Box>
    //             <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} Unless otherwise stated, [Crypto Company Name] and/or its licensors own the intellectual property rights for all material on [Crypto Company Name]'s Website. All intellectual property rights are reserved. You may view and/or print pages from [Crypto Company Name]'s Website for your own personal use subject to restrictions set in these terms and conditions.</Box>
    //         </Stack>
    //         <Divider className="divider"/>
    //         <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
    //             <Box className="fs-s t-p">User Comments</Box>
    //             <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} Certain parts of this Website offer the opportunity for users to post and exchange opinions, information, material, and data ('Comments') in areas of the Website. [Crypto Company Name] does not screen, edit, publish, or review Comments prior to their appearance on the Website and Comments do not reflect the views or opinions of [Crypto Company Name], its agents, or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws, [Crypto Company Name] shall not be responsible or liable for the Comments or for any loss, cost, liability, damages, or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this Website.</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} [Crypto Company Name] reserves the right to monitor all Comments and to remove any Comments which it considers, in its absolute discretion, to be inappropriate, offensive, or otherwise in breach of these Terms and Conditions.</Box>
    //         </Stack>
    //         <Divider className="divider"/>
    //         <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
    //             <Box className="fs-s2 t-p">You warrant and represent that:</Box>
    //             <Box className="f-body t-p p-10" sx={{textAlign:'left'}}>{middleDot} You are entitled to post the Comments on our Website and have all necessary licenses and consents to do so; The Comments do not infringe any intellectual property right, including without limitation copyright, patent, or trademark, or other proprietary right of any third party; The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material or material which is an invasion of privacy.</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} You hereby grant to [Crypto Company Name] a non-exclusive royalty-free license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.</Box>
    //         </Stack>
    //         <Divider className="divider"/>
    //         <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
    //             <Box className="fs-s t-p">Hyperlinking to our Content</Box>
    //             <Box className="fs-s2 t-p" sx={{textAlign:'left'}}>We use your information for the following purposes:</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} Government Agencies;</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} Search engines;</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} News organizations; </Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} Online directory distributors when they list us in the directory may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot}  Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Website.</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site. </Box>
    //         </Stack>
    //         <Divider className="divider"/>
    //         <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
    //             <Box className="fs-s2 t-p" sx={{textAlign:'left'}}>We may consider and approve in our sole discretion other link requests from the following types of organizations:</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} Commonly-known consumer and/or business information sources; </Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} Dot.com community sites; </Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} Associations or other groups representing charities; </Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} Online directory distributors; </Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} Internet portals; </Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} Accounting, law, and consulting firms; and</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot}  Educational institutions and trade associations.</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of [Crypto Company Name]; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization.</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an email to [Your Email Address]. Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response.</Box>
    //         </Stack>
    //         <Divider className="divider"/>
    //         <Stack direction="column" justifyContent="center"  alignItems="flex-start"  spacing={2}>
    //             <Box className="fs-s2 t-p" sx={{textAlign:'left'}}>Approved organizations may hyperlink to our Website as follows:</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} By use of our corporate name; or </Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot} By use of the uniform resource locator (Web address) being linked to; or</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>{middleDot}  By use of any other description of our Website or material being linked to that makes sense within the context and format of content on the linking party's site.</Box>
    //             <Box className="f-body t-p" sx={{textAlign:'left'}}>No use of [Crypto Company Name]'s logo or other artwork will be allowed for linking absent a trademark license agreement.</Box>
    //         </Stack>
    //     </Container>       
    // </Box>
    return (
        <div className="terms-section">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
            >
            <Box className="h3 t-p">
                Terms and Conditions
            </Box>
            <Box className="terms-content">
                <Box className="h4 t-p">
                    Soon to be announced
                </Box>
            </Box>
            </Box>
        </div>
    )
}

export default Terms