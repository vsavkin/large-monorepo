import { render } from '@testing-library/react';

import Icon87 from './icon87';

describe('Icon87', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon87 />);
    expect(baseElement).toBeTruthy();
  });
});
