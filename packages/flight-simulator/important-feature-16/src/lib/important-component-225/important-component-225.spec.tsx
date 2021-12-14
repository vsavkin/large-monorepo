import { render } from '@testing-library/react';

import ImportantComponent225 from './important-component-225';

describe('ImportantComponent225', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent225 />);
    expect(baseElement).toBeTruthy();
  });
});
