import { render } from '@testing-library/react';

import Icon224 from './icon224';

describe('Icon224', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon224 />);
    expect(baseElement).toBeTruthy();
  });
});
