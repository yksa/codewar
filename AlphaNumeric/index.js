function alphanumeric(string) {
  pattern = /^[a-z0-9]+$/i;
  return pattern.test(string);
}
