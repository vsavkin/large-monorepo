import { render } from '@testing-library/react';

import Icon149 from './icon149';

describe('Icon149', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon149 />);
    expect(baseElement).toBeTruthy();
  });
});
