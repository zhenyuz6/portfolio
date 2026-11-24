# GRPO training figure provenance

Source: user-provided train_log.jsonl (MP2 reward-based post-training). The fields match the GRPO training implementation in the submitted checkpoint-2 archive.

- 400 complete optimizer-step records, numbered 1 through 400.
- One final timing-only summary was excluded from the plotted series.
- Pale lines show every logged step, including the KL spike at step 318.
- Strong lines show a trailing arithmetic mean over 25 steps; only full windows are shown.
- Training reward is not held-out GSM8K accuracy or a validation loss.
- Mean KL is logged over scored completion tokens.
- First and last 25-step mean rewards: 0.3095000034570694 and 0.6557500028610229.

The CSV retains the logged step, mean reward, reward standard deviation, mean KL, objective loss, and learning rate without smoothing.
