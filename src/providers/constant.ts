export namespace Constants {
    export const version = 'Version: 1.2.13';
      // export const baseUrl = "http://localhost:52018/";
    export const baseUrl = "http://testopcareapi.onebcg.com/";
    // export const baseUrl = "http://uatopcareapi.onebcg.com/"; 
  
    export const validateMobile = [
      { country: 'Botswana', code: '+267', validateMbl: 8, validateLand: 7 },
      { country: 'USA', code: '+1', validateMbl: 10, validateLand: 10 },
      { country: 'India', code: '+91', validateMbl: 10, validateLand: 10 },
      { country: 'Australia', code: '+61', validateMbl: 9, validateLand: 9 }
    ];
  
    export const errorMessages = {
      serverDown: 'Service is not reachable, Please try again',
      downloadFailed: 'Download Failed',
      patientStageIsSame: 'Patient stage is already the same!',
      tagNameAlreadyExist: 'This Tag Name already exist!'
    };
  
    export const successMessages = {
      exitFromApp: 'Press again to exit!',
  
      patientEnrolled: 'Patient enrolled and checked in',
      patientPutOnOffSite: 'Patient put on Offsite Treatment!',
      patientPutOnReview: 'Patient put on review!',
      followUpSchedule: 'Follow up scheduled!',
      smsOtpSent: 'Please check your mobile to get your OTP',
      emailOtpSent: 'Please check your email to get your OTP',
      downloadSuccess: 'Download successfully',
      saved: 'Saved',
      profileUpdatedSuccess: 'Profile Updated Successfully',
      treatmentPlanUpdated: 'Treatment plan updated',
      treatmentPlanSaved: 'Treatment plan saved',
      appointmentReschedule: 'Appointment Rescheduled',
      emailSent: 'Email sent',
      feedbackSent: 'Feedback sent',
      staffEnrolled: 'Staff enrolled'
    };
  
    export const confirmMessages = {
      exitFromApp: 'Press again to exit!',
  
      patientAttachmentNotesAdded: 'Attachment and notes added',
      patientAddDiagnoseDetails: 'Add diagnosis details now?'
    };
  
    export const validationMessages = {
      required: '*Required',
      omangNo: 'Please enter valid Omang number',
      mobileNo: 'Please enter valid Mobile number',
      landlineNo: 'Please enter valid landline number',
      emailId: 'Please enter valid email',
      clinicHospital: 'Please select valid Clinic/Hospital',
      locationArea: 'Please select valid Location/Area',
      invalidUsername: 'The email address or mobile number that you have entered does not match any account.',
      invalidPassword: 'The password you entered is incorrect.',
      passwordLength: 'The password length should be 6 to 16 characters.',
      passwordMatchError: 'The password and confirm Password don\'t match.',
      wrongOtp: 'Please enter valid OTP',
      atLeastOneReview: 'Please select at least one option'
    };
  }
  