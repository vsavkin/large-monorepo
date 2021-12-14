import { render } from '@testing-library/react';

import ImportantComponent151 from './important-component-151';

describe('ImportantComponent151', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent151 />);
    expect(baseElement).toBeTruthy();
  });
});
