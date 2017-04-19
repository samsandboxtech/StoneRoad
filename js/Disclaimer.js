import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';

const Screen = Dimensions.get('window')


import { userExists } from './API'

export default class CheckEmail extends Component {

  static navigationOptions = {
    headerVisible: false,
    cardStack: { gesturesEnabled: false }
  }

  constructor(props) {
    super(props)
    this.state = { text: null }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{flex: 1, paddingTop: 36, padding: 16, backgroundColor: '#f0ede6', alignItems: 'center', justifyContent: 'space-between', overflow: 'visible'}}>
        <ScrollView>
        <Text style={{fontSize: 24, fontFamily: 'American Typewriter'}}>
        Terms and Conditions
        </Text>
        <Text style={{marginVertical: 4, fontSize: 20, fontFamily: 'American Typewriter'}}>

Last updated: April 18, 2017
</Text>
        <Text style={{marginVertical: 4, fontSize: 14, fontFamily: 'American Typewriter'}}>
Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the Stone Road Rewards mobile application (the "Service") operated by Stingray Consulting, LLC ("us", "we", or "our").
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who wish to access or use the Service.
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you do not have permission to access the Service.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Accounts
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
When you create an account with us, you guarantee that you are above the age of 21, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password, whether your password is with our Service or a third-party service. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than you, without appropriate authorization. You may not use as a username any name that is offensive, vulgar or obscene.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Intellectual Property
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
The Service and its original content, features and functionality are and will remain the exclusive property of Stingray Consulting, LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Stingray Consulting, LLC.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Links To Other Web Sites
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
Our Service may contain links to third party web sites or services that are not owned or controlled by Stingray Consulting, LLC
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
Stingray Consulting, LLC has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
You acknowledge and agree that Stingray Consulting, LLC shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such third party web sites or services.
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that you visit.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Termination
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
If you wish to terminate your account, you may simply discontinue using the Service.
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Indemnification
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
You agree to defend, indemnify and hold harmless Stingray Consulting, LLC and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access of the Service, by you or any person using your account and password, or b) a breach of these Terms.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Limitation Of Liability
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
In no event shall Stingray Consulting, LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Disclaimer
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
Stingray Consulting, LLC its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Exclusions
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential or incidental damages, so the limitations above may not apply to you.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Governing Law
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
These Terms shall be governed and construed in accordance with the laws of California, United States, without regard to its conflict of law provisions.
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Changes
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 15 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
</Text>
<Text style={{fontSize: 20, marginVertical: 4, fontFamily: 'American Typewriter'}}>
Contact Us
</Text>
<Text style={{marginVertical: 4, fontFamily: 'American Typewriter'}}>
If you have any questions about these Terms, please contact us.
        </Text>
        </ScrollView>
        <View style={{alignSelf: 'stretch', paddingTop: 16}}>
        <TouchableHighlight 
          underlayColor='rgba(0,0,0,0.25)'
          overlayColor='rgba(0,0,0,0.25)'
          onPress={() => navigate('Information')}
        >
          <View style={{ paddingVertical: 24, paddingHorizontal: 16, marginTop: StyleSheet.hairlineWidth*-1, borderColor: '#111', borderWidth: StyleSheet.hairlineWidth}}>
            <Text style={{fontFamily: 'American Typewriter', letterSpacing: 4, fontSize: 20, fontWeight: '400', color: '#ff890d'}}>I AGREE  ></Text>
          </View>
        </TouchableHighlight>
        </View>
      </View>
    )
  }
}