import { render } from '@testing-library/react';

import Icon68 from './icon68';

describe('Icon68', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon68 />);
    expect(baseElement).toBeTruthy();
  });
});
