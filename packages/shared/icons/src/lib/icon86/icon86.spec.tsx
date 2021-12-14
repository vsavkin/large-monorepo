import { render } from '@testing-library/react';

import Icon86 from './icon86';

describe('Icon86', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon86 />);
    expect(baseElement).toBeTruthy();
  });
});
