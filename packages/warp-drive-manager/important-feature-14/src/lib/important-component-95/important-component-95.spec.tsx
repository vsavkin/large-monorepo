import { render } from '@testing-library/react';

import ImportantComponent95 from './important-component-95';

describe('ImportantComponent95', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent95 />);
    expect(baseElement).toBeTruthy();
  });
});
