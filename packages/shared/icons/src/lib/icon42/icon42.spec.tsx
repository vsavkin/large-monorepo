import { render } from '@testing-library/react';

import Icon42 from './icon42';

describe('Icon42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon42 />);
    expect(baseElement).toBeTruthy();
  });
});
