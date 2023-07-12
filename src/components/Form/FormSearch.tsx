import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface IForm {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const FormSearch = ({ handleSubmit, isLoading }: IForm) => {
  return (
    <>
      <Box
        component="form"
        sx={{
          maxWidth: "100%",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{
            backgroundColor: "#fff",
            mb: 1,
          }}
          hiddenLabel
          fullWidth
          variant="outlined"
          placeholder="Enter username"
          name="inputQuery"
        />
        <Button
          type="submit"
          disabled={isLoading}
          variant="contained"
          sx={{ width: "100%" }}
        >
          Search
        </Button>
      </Box>
    </>
  );
};

export default FormSearch;
