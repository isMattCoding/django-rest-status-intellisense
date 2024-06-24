class Tests():
    def test(self):
        status = {"HTTP_100_CONTINUE": ""}
        url = '/get/'
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_100_CONTINUE)
