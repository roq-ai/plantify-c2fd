import * as yup from 'yup';

export const plantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  category: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  organization_id: yup.string().nullable(),
});
