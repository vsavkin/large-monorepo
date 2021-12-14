import { render } from '@testing-library/react';

import Icon80 from './icon80';

describe('Icon80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon80 />);
    expect(baseElement).toBeTruthy();
  });
});
