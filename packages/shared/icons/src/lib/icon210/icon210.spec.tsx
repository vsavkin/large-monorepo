import { render } from '@testing-library/react';

import Icon210 from './icon210';

describe('Icon210', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon210 />);
    expect(baseElement).toBeTruthy();
  });
});
