import { render } from '@testing-library/react';

import Icon222 from './icon222';

describe('Icon222', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon222 />);
    expect(baseElement).toBeTruthy();
  });
});
