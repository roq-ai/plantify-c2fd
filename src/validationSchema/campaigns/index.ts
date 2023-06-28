import * as yup from 'yup';

export const campaignValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  organization_id: yup.string().nullable(),
});
