import keras
import numpy as np
import tensorflow as tf
from keras.layers import Conv2D, MaxPooling2D, Lambda, Flatten, Dense, Dropout
from keras import layers
from keras.models import Sequential

batch_size =8
epochs = 1
classes = 43
input_shape=(256,256,3)

model = Sequential()

model.add(Conv2D(64, (5, 5), padding = 'same', input_shape=input_shape, activation="relu"))
model.add(Conv2D(64, (3, 3), padding = 'same', activation="relu"))
model.add(MaxPooling2D(pool_size=(3, 3), strides=(2, 2)))

for filt, num in [(128,2), (256,2), (512,3), (512,3)]:
    for _ in range(num):
        model.add(Conv2D(filt, (3, 3), padding = 'same', activation="relu"))
    model.add(MaxPooling2D(pool_size=(3, 3), strides=(2, 2)))

model.add(Flatten())

model.add(Dense(4096, activation="relu"))
model.add(Dropout(0.4))
model.add(Dense(4096, activation="relu"))
model.add(Dropout(0.4))
# model.add(Dense(1000, activation="relu"))
# model.add(Dense(512, activation="relu"))

# model.add(Dropout(0.4))
# model.add(Dense(256, activation="relu"))
# model.add(Dense(128, activation="relu"))
# model.add(Dropout(0.2))
model.add(Dense(classes, activation="softmax"))
# model.add(Dropout(0.2))
# model.add(LayerNormalization())


# earlyStopping = tf.keras.callbacks.EarlyStopping(patience = 1)


train_ds = keras.utils.image_dataset_from_directory(
    directory='./Object detection/dataset',
    labels='inferred',
    label_mode='int',
    batch_size=16,
    image_size=input_shape[0:2]
    )


optimizer = keras.optimizers.SGD(learning_rate=0.001)

model.compile(loss='sparse_categorical_crossentropy', optimizer = optimizer, metrics = ['accuracy'])

history = model.fit(
    train_ds,
    batch_size=batch_size,
    epochs=epochs,
    # callbacks = [earlyStopping]
)

tf.keras.saving.save_model(model, "/", overwrite=True)
