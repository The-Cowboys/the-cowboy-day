-- Paso 1: Agregar una nueva columna dia_temp con tipo de dato date
ALTER TABLE tontos ADD COLUMN dia_temp DATE;

-- Paso 2: Establecer los valores de dia_temp a partir de dia
UPDATE tontos SET dia_temp = TO_DATE(dia, 'DD/MM/YYYY');

-- Paso 3: Eliminar la antigua columna dia
ALTER TABLE tontos DROP COLUMN dia;

-- Paso 4: Renombrar dia_temp a dia
ALTER TABLE tontos RENAME COLUMN dia_temp TO dia;

-- Paso 5: Establecer la nueva columna dia como no nula
ALTER TABLE tontos ALTER COLUMN dia SET NOT NULL;