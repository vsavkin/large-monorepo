import { render } from '@testing-library/react';

import ImportantComponent27 from './important-component-27';

describe('ImportantComponent27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent27 />);
    expect(baseElement).toBeTruthy();
  });
});
