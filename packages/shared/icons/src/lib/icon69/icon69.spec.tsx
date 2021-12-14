import { render } from '@testing-library/react';

import Icon69 from './icon69';

describe('Icon69', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon69 />);
    expect(baseElement).toBeTruthy();
  });
});
