import { render } from '@testing-library/react';

import Icon219 from './icon219';

describe('Icon219', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon219 />);
    expect(baseElement).toBeTruthy();
  });
});
