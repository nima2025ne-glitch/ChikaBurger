  var map = L.map('map', {
    minZoom: 1,
    maxZoom: 20
  }).setView([36.32688, 59.54023], 15);

  L.tileLayer('https://map.ir/vector/styles/main/mapir-xyz-style.json', {
    apiKey: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY1MTFkZThjYjNlZmNkY2I2MTNkOGRmYTI1MDRlYzgwODg0NTNjZDc1NzE4N2U3NTM0OGY5NjQ4MWNhNDExYzFjNjkzY2JmZmVhY2U3ZjE2In0.eyJhdWQiOiIzNDEzMiIsImp0aSI6ImY1MTFkZThjYjNlZmNkY2I2MTNkOGRmYTI1MDRlYzgwODg0NTNjZDc1NzE4N2U3NTM0OGY5NjQ4MWNhNDExYzFjNjkzY2JmZmVhY2U3ZjE2IiwiaWF0IjoxNzU2NTc4MDYzLCJuYmYiOjE3NTY1NzgwNjMsImV4cCI6MTc1OTE3MDA2Mywic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.GUy3OCPIKqdADgBSYJ6RN1Z70zj-UikweVuB13EVVAWtOVcrQSSSl2uGdUQooPECBpOWVVDiePAYwovs7SFXZu9vGp18N73ni7iqrK-3PADb9b9T4XQuamfiu-p9JXi-hrZhwXiYyRi3gH2Oo3wYpzKvdbr6CZUnq5wiajvMfsJaWPln2Hw7rkgSRMqVKxG9CpjwD_ltRZEHd6-B7v2wpXR_vKgs6OBpmDeSBsUOX_9-8W4-0jPAM7qTEY6JmKq8POXZFozVpL5gXJHSFWWbR8p9t69zYANj2qNjjJukJ9DaNZdj7BAem1HvXW5zOigjqDT3embB2eUsfaJiZk7hfQ"
  }).addTo(map);

  L.marker([36.32688, 59.54023]).addTo(map)
    .bindPopup("فست فود چیکا برگر")
    .openPopup();
