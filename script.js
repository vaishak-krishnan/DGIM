function checkAndMergeBucket(bucketList, t) {
    const bucketListLength = bucketList.length;
    for (let i = 0; i < bucketListLength; i++) {
      if (bucketList[i].length > 2) {
        bucketList[i].shift();
        if (i + 1 >= bucketListLength) {
          bucketList[i].shift();
        } else {
          bucketList[i + 1].push(bucketList[i].shift());
        }
      }
    }
  }

  document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
      const binaryString = e.target.result;
      let onesCount = 0;
      const N = binaryString.length;
      const k = Math.floor(Math.log2(N));
      const bucketList = new Array(k + 1).fill().map(() => []);

      for (let t = 0; t < N; t++) {
        const bit = binaryString.charAt(t);
        for (let i = 0; i < k + 1; i++) {
          for (const bucketTimestamp of bucketList[i]) {
            if (bucketTimestamp === t) {
              bucketList[i].splice(bucketList[i].indexOf(bucketTimestamp), 1);
            }
          }
        }
        if (bit === '1') {
          bucketList[0].push(t);
          checkAndMergeBucket(bucketList, t);
          onesCount++;
        }
      }

      for (const bucket of bucketList) {
        onesCount += bucket.length;
      }

      document.getElementById('result').textContent = `Total number of 1's in the binary string: ${onesCount}`;
    };
    reader.readAsText(file);
  });