import { render } from '@testing-library/react';

import Icon55 from './icon55';

describe('Icon55', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon55 />);
    expect(baseElement).toBeTruthy();
  });
});
